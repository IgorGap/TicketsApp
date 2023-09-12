import React, { useState } from 'react'

import styles from './styles.module.scss'
import { FilteredMenu } from '../FilteredMenu'
import { TicketList } from '../TicketsData'

export const Content: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('rub')
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<{
    [key: string]: boolean
  }>({
    checkboxAll: true,
    checkbox0: false,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  })

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency)
  }

  return (
    <>
      <div className={styles.wrappContent}>
        <FilteredMenu
          selectedCurrency={selectedCurrency}
          handleCurrencyChange={handleCurrencyChange}
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
        <TicketList
          selectedCheckboxes={selectedCheckboxes}
          selectedCurrency={selectedCurrency}
        />
      </div>
    </>
  )
}
