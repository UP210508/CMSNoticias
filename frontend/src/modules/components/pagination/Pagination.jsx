import { createArray } from "../../helpers";
import { useNotices } from "../../hooks"

export const Pagination = () => {

  const { quantityOfPages, currentPage, selectPage } = useNotices();
  const pageArr = createArray( quantityOfPages );

  const prevPage = () => {
    if ( currentPage === 1 ) { return }
    selectPage( currentPage - 1 )
  }

  const nextPage = () => {
    if ( currentPage === quantityOfPages ) return;
    selectPage( currentPage + 1 );
  }

  return (
    <div className="pagination flex flex-center">
      <button 
        disabled={ currentPage === 1 }
        onClick={ prevPage } 
        className="pagination__button pagination__button--left"
      >
        <i className='bx bx-chevron-left pagination__icon'></i>
      </button>
      <div className="pagination__numbers flex flex-center">
        { 
          pageArr.map( numberPage => (
            <div 
              onClick={ () => selectPage( numberPage ) } 
              className={`pagination__box flex flex-center ${ currentPage === numberPage && 'pagination__box--active'}`}
            >
              <p className="pagination__number">{numberPage}</p>
            </div>
          ))
        }
      </div>
      <button 
        disabled={ currentPage === quantityOfPages }
        onClick={ nextPage } 
        className="pagination__button pagination__buttob--right">
        <i className='bx bx-chevron-right pagination__icon'></i>
      </button>
    </div>
  )
} 
