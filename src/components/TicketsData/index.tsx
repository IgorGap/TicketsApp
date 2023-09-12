import React from 'react'
import styles from './styles.module.scss'
import ticketData from '../tickets.json'

interface Ticket {
  origin: string
  origin_name: string
  destination: string
  destination_name: string
  departure_date: string
  departure_time: string
  arrival_date: string
  arrival_time: string
  carrier: string
  stops: number
  price: number
}
interface TicketListProps {
  selectedCurrency: string
  selectedCheckboxes: Record<string, boolean>;
}

export const TicketList = ({
  selectedCurrency,
  selectedCheckboxes,
}: TicketListProps) => {
  const { tickets } = ticketData
  const sortedTickets = [...tickets].sort((a, b) => a.price - b.price)
  const convertPrice = (price: number, currency: string): number => {
    if (currency === 'rub') {
      return price
    } else if (currency === 'usd') {
      return Math.round(price / 95)
    } else if (currency === 'eur') {
      return Math.round(price / 120)
    }
    return price
  }

  const filteredTickets = sortedTickets.filter((ticket) => {
    if (selectedCheckboxes.checkboxAll) {
      return true
    }
    if (selectedCheckboxes.checkbox0 && ticket.stops === 0) {
      return true
    }
    if (selectedCheckboxes.checkbox1 && ticket.stops === 1) {
      return true
    }
    if (selectedCheckboxes.checkbox2 && ticket.stops === 2) {
      return true
    }
    if (selectedCheckboxes.checkbox3 && ticket.stops === 3) {
      return true
    }
    return false
  })

  return (
    <div className={styles.wrappTicketList}>
      <div className={styles.tickets}>
        {filteredTickets.map((ticket: Ticket, index: number) => (
          <div className={styles.ticket} key={index}>
            <div className={styles.logoPrise}>
              TURKISH AIRLINES
              <div className={styles.prise}>
                {' '}
                Купить за: {convertPrice(ticket.price, selectedCurrency)}{' '}
                {selectedCurrency === 'usd'
                  ? 'USD'
                  : selectedCurrency === 'eur'
                  ? 'EUR'
                  : 'руб'}
              </div>
            </div>

            <div className={styles.departure}>
              <div className={styles.depTime}>{ticket.arrival_time}</div>
              <div className={styles.origin_name}>
                <div>{ticket.origin}</div>
                {', '} {ticket.origin_name}
              </div>
              <div className={styles.depDate}>{ticket.arrival_date}</div>
            </div>
            <div className={styles.stops}>
              {ticket.stops} пересадка <div className={styles.line}></div>
            </div>
            <div className={styles.departure}>
              <div className={styles.depTime}>{ticket.departure_time}</div>
              <div className={styles.origin_name}>
                <div>{ticket.carrier}</div>
                {', '} {ticket.destination_name}
              </div>
              <div className={styles.depDate}>{ticket.departure_date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
