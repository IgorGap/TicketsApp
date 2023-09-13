import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { Checkbox } from '../../UI/Checkbox'

export type FilteredMenuProps = {
  selectedCurrency: string
  handleCurrencyChange: (currency: string) => void
  selectedCheckboxes: {
    [key: string]: boolean
  }
  setSelectedCheckboxes: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >
}

export const FilteredMenu = ({
  selectedCurrency,
  handleCurrencyChange,
  selectedCheckboxes,
  setSelectedCheckboxes,
}: FilteredMenuProps) => {
  const { checkboxAll, checkbox0, checkbox1, checkbox2, checkbox3 } =
    selectedCheckboxes

  useEffect(() => {
    if (checkboxAll) {
      setSelectedCheckboxes((prev: { [key: string]: boolean }) => ({
        ...prev,
        checkbox0: true,
        checkbox1: true,
        checkbox2: true,
        checkbox3: true,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxAll])

  useEffect(() => {
    if (checkbox0 && checkbox1 && checkbox2 && checkbox3) {
      setSelectedCheckboxes((prev: { [key: string]: boolean }) => ({
        ...prev,
        checkboxAll: true,
      }))
    } else if (checkbox0 || checkbox1 || checkbox2 || checkbox3) {
      setSelectedCheckboxes((prev: { [key: string]: boolean }) => ({
        ...prev,
        checkboxAll: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkbox0, checkbox1, checkbox2, checkbox3])

  const handleCheckboxChange = (checkboxName: string) => {
    setSelectedCheckboxes((prev: { [key: string]: boolean }) => ({
      ...prev,
      [checkboxName]: !prev[checkboxName],
    }))
  }
  return (
    <>
      <div className={styles.wrappMenu}>
        <div className={styles.topInfo}>
          <div className={styles.MenuValuta}>Валюта</div>
          <div className={styles.togl}>
            <div
              className={`${styles.currencyItem} ${
                selectedCurrency === 'rub' ? styles.selected : ''
              }`}
              onClick={() => handleCurrencyChange('rub')}
            >
              RUB
            </div>
            <div
              className={`${styles.currencyItem} ${
                selectedCurrency === 'usd' ? styles.selected : ''
              }`}
              onClick={() => handleCurrencyChange('usd')}
            >
              USD
            </div>
            <div
              className={`${styles.currencyItem} ${
                selectedCurrency === 'eur' ? styles.selected : ''
              }`}
              onClick={() => handleCurrencyChange('eur')}
            >
              EUR
            </div>
          </div>
        </div>
        <div className={styles.MenuStop}>
          <div className={styles.stopTitle}>Количество пересадок</div>
          <div className={styles.optionsStops}>
            <div className={styles.stop}>
              <Checkbox
                isActive={selectedCheckboxes.checkboxAll}
                onChange={() => handleCheckboxChange('checkboxAll')}
              />
              все билеты
            </div>
            <div className={styles.stop}>
              <Checkbox
                isActive={selectedCheckboxes.checkbox0}
                onChange={() => handleCheckboxChange('checkbox0')}
              />
              без пересадок
            </div>

            <div className={styles.stop}>
              <Checkbox
                isActive={selectedCheckboxes.checkbox1}
                onChange={() => handleCheckboxChange('checkbox1')}
              />
              1 пересадка
            </div>

            <div className={styles.stop}>
              <Checkbox
                isActive={selectedCheckboxes.checkbox2}
                onChange={() => handleCheckboxChange('checkbox2')}
              />
              2 пересадки
            </div>

            <div className={styles.stop}>
              <Checkbox
                isActive={selectedCheckboxes.checkbox3}
                onChange={() => handleCheckboxChange('checkbox3')}
              />
              3 пересадки
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
