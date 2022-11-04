import PropTypes from 'prop-types'
import {Table, Head, Row, HeadCell, Body, BodyCell} from './TransactionHistory.styles'

export function TransactionHistory ({items}) {
    return(
        <Table>
            <Head>
                <Row>
                    <HeadCell>Type</HeadCell>
                    <HeadCell>Amount</HeadCell>
                    <HeadCell>Currency</HeadCell>
                </Row>
            </Head>
            <Body>
                {items.map(({id, type, amount, currency}) => (
                    <Row key={id}>
                        <BodyCell>{type}</BodyCell>
                        <BodyCell>{amount}</BodyCell>
                        <BodyCell>{currency}</BodyCell>
                    </Row>
                ))}
            </Body>
        </Table>
    )
}


TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  };