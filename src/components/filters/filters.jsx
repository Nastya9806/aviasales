import React from 'react'
import classes from './filters.module.scss'
import { connect } from 'react-redux';
import {select} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import {getTransfers} from '../../redux/reducers/reducers'

const Filters = () => {
  const dispatch = useDispatch()
  const transfersState = useSelector((state) => state.transfer)
  const handleChange = (e) => {
    dispatch(select(e.target.id, transfersState))
  }

    return (
        <div className={classes.filter}>
        <span className={classes.filter__header}>Количество пересадок</span>
        <ul className={classes.filter__list}>
          {Object.entries(transfersState).map(([key, value]) => (
            <li key={key} className={classes.filter__item}>
            <label htmlFor={key} className={classes.filter__label}>
              <input
                type="checkbox"
                id={key}
                checked={value.isChecked}
                className={classes.filter__input}
                onChange={handleChange}
              />
              <span className={classes.filter__checkbox} />
              {value.label}
            </label>
          </li>
          ))}
        </ul>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    transfers: state.transfers,
  };
};

export default connect(mapStateToProps, actions)(Filters);