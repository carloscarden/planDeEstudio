import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MateriaDenominacion } from 'src/app/_models/ofertaEducativa/materia-denominacion';
import { PageInfo } from 'src/app/_models/page-info';
import { MateriaDenominacionService } from 'src/app/_services/gestionEducativa/materia-denominacion.service';

export class MateriasDataSource implements DataSource<MateriaDenominacion>{
    private materiasSubject = new BehaviorSubject<MateriaDenominacion[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();

    constructor(private busquedaMateriaService: MateriaDenominacionService) { }

    connect(collectionViewer: CollectionViewer): Observable<MateriaDenominacion[] | readonly MateriaDenominacion[]> {
        return this.materiasSubject.asObservable();
    }


    disconnect(collectionViewer: CollectionViewer): void {
        this.materiasSubject.complete();
        this.loadingSubject.complete();
        this.countSubject.complete();
    }

    loadMaterias(pageNumber = 0, pageSize = 10, descripcion: string): void {
        this.loadingSubject.next(true);
        this.busquedaMateriaService.buscarMateriasDenominacion(pageNumber, pageSize, descripcion)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((result: PageInfo) => {
                console.log(result.content);
                this.materiasSubject.next(result.content);
                this.countSubject.next(result.totalElements);
            }
            );
    }
}
