import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Orientacion } from 'src/app/_models/ofertaEducativa/orientacion';
import { PageInfo } from 'src/app/_models/page-info';
import { DatosCargaOfertaEducativaService } from 'src/app/_services/gestionEducativa/datos-carga-oferta-educativa.service';

export class OrientacionDataSource implements DataSource<Orientacion>{
    private orientacionSubject = new BehaviorSubject<Orientacion[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();

    constructor(private busquedaOrientacionService: DatosCargaOfertaEducativaService) { }

    connect(collectionViewer: CollectionViewer): Observable<Orientacion[] | readonly Orientacion[]> {
        return this.orientacionSubject.asObservable();
    }


    disconnect(collectionViewer: CollectionViewer): void {
        this.orientacionSubject.complete();
        this.loadingSubject.complete();
        this.countSubject.complete();
    }

    loadFirmas(pageNumber = 0, pageSize = 10, descripcion: string): void {
        this.loadingSubject.next(true);
        this.busquedaOrientacionService.recuperarOrientaciones(pageNumber, pageSize, descripcion)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((result: PageInfo) => {
                console.log(result.content);
                this.orientacionSubject.next(result.content);
                this.countSubject.next(result.totalElements);
            }
            );
    }
}
