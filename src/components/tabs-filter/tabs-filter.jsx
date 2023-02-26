// import React from 'react'
// import classes from './tabs-filter.module.scss'
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions'
// import classNames from 'classnames';
// // import { getSort } from '../../redux/reducers/reducers';

// const TabsFilters = ({sort, sortCheap, sortFast, sortOptimal}) => {
// const getButtonClassNames = (order) => ({
//     [classes.button]: true,
//     [classes.selected]: sort === order,
//   });

// const btnCheapClassNames = classNames(getButtonClassNames('cheapest'));
// const btnFastClassNames = classNames(getButtonClassNames('fastest'));
// const optimalClassNames = classNames(getButtonClassNames('optimal'));

//     return (
//     <ul className={classes.tabs}>
//         <li className={classes.tabs__item}>
//         <button type="button" className={btnCheapClassNames} onClick={sortCheap}>
//        самый дешевый
//      </button>
//             </li>
//         <li className={classes.tabs__item}>
//         <button type="button" className={btnFastClassNames} onClick={sortFast}>
//        самый быстрый
//      </button>
//             </li>
//             <li className={classes.tabs__item}>
//         <button type="button" className={optimalClassNames} onClick={sortOptimal}>
//        оптимальный
//      </button>
//             </li>
//     </ul>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//       sort: state.sort,
//     };
//   };
  
//   export default connect(mapStateToProps, actions)(TabsFilters);

import React from 'react'
import classes from './tabs-filter.module.scss'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import classNames from 'classnames';
// import { getSort } from '../../redux/reducers/reducers';

const TabsFilters = ({sort, sortCheap, sortFast, sortOptimal}) => {
const getButtonClassNames = (order) => ({
    [classes.button]: true,
    [classes.selected]: sort === order,
  });

const btnCheapClassNames = classNames(getButtonClassNames('cheapest'));
const btnFastClassNames = classNames(getButtonClassNames('fastest'));
const optimalClassNames = classNames(getButtonClassNames('optimal'));

    return (
    <ul className={classes.tabs}>
        <li className={classes.tabs__item}>
        <button type="button" className={btnCheapClassNames} onClick={sortCheap}>
       самый дешевый
     </button>
            </li>
        <li className={classes.tabs__item}>
        <button type="button" className={btnFastClassNames} onClick={sortFast}>
       самый быстрый
     </button>
            </li>
            <li className={classes.tabs__item}>
        <button type="button" className={optimalClassNames} onClick={sortOptimal}>
       оптимальный
     </button>
            </li>
    </ul>
    )
}

const mapStateToProps = (state) => {
    return {
      sort: state.sort,
    };
  };
  
  export default connect(mapStateToProps, actions)(TabsFilters);