import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Paginator = ({pagesCount, pageActive, leftArrowAction, rightArrowAction, numbersAction}) =>{

   let pages = [];

   let i = 1;
   while(i <= pagesCount){
      let index = i;
      pages.push((
         <li key={i} className={`${pageActive === i ? "active" : ""} page-item`}>
            <a 
               href="#!" 
               className={`page ${pageActive === i ? "active" : ""} page-link`} 
               onClick={pageActive === i ? undefined : ()=>{numbersAction(index)}}>{i}</a>
         </li>
      ));
      i++;
   }

   let processPages = (pages)=>{

      let visiblePagesLength = 5;

      let overflow = Math.floor(visiblePagesLength / 2);

      let visiblePages = [];

      let startPage = pageActive - overflow;

      for(let i = startPage; i < startPage + visiblePagesLength; i++){
         
         if(i < 0) continue;
         if(i > pagesCount) continue;

         visiblePages.push(pages[i]);

      }

      return visiblePages;

   }

   return (
      <>
         {pagesCount < pageActive || pagesCount === 0 || pageActive === 0 ? null : (
            <div className="paginator">
               <ul className="pages pagination">
                  <li  className={`arrow left ${pageActive <= 1 ? "disabled" : ""} page-item`}  onClick={pageActive <= 1 ? undefined : leftArrowAction}>
                     <a className="page-link" href="#!" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                     </a>
                  </li>
                  {processPages(pages)}
                  <li  className={`arrow right ${pageActive >= pagesCount ? "disabled" : ""} page-item`} onClick={pageActive >= pagesCount ? undefined : rightArrowAction}>
                     <a className="page-link" href="#!" aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                     </a>
                  </li>
               </ul>
            </div>
         )}
      </>
   );
}