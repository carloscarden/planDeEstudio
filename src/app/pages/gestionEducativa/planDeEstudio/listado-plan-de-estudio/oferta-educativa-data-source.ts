import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { BusquedaOferta } from 'src/app/_models/busquedas/busqueda-oferta';
import { OfertaEducativaRama } from 'src/app/_models/ofertaEducativa/oferta-educativa-rama';
import { PageInfo } from 'src/app/_models/page-info';
import { OfertaEducativaBusquedasService } from 'src/app/_services/gestionEducativa/planDeEstudio/oferta-educativa-busquedas.service';

export class OfertaEducativaDataSource implements DataSource<OfertaEducativaRama>{
    private ofertaEducativaSubject = new BehaviorSubject<OfertaEducativaRama[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();

    constructor(private busquedaOfertaEducativaService: OfertaEducativaBusquedasService) { }

    connect(collectionViewer: CollectionViewer):
        Observable<OfertaEducativaRama[] | readonly OfertaEducativaRama[]> {
        return this.ofertaEducativaSubject.asObservable();
    }


    disconnect(collectionViewer: CollectionViewer): void {
        this.ofertaEducativaSubject.complete();
        this.loadingSubject.complete();
        this.countSubject.complete();
    }

    loadFirmas(pageNumber = 0, pageSize = 10, busquedaEstab: BusquedaOferta): void {
        this.loadingSubject.next(true);
        this.busquedaOfertaEducativaService.buscarOfertasEducativas(pageNumber, pageSize, busquedaEstab)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((result: PageInfo) => {
                console.log(result.content);
                this.ofertaEducativaSubject.next(result.content);
                this.countSubject.next(result.totalElements);
            }
            );
    }
}
