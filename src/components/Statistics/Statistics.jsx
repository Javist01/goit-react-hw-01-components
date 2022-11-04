// props :  title, stats
// components : <h2>upload stats <h2/>
// написать генератор случайного цвета для каждого елемнта
import PropTypes from 'prop-types';
import {
    Section,
    Title,
    List,
    Item,
    Label,
    Percentage
} from './Statistics.styles'


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


export const Statistics = ({title, stats}) => {
    return(
        <Section>
            {title && <Title>{title}</Title>}

            <List>
                {stats.map(({id, label, percentage}) => (
                    <Item key={id} style={{backgroundColor: getRandomHexColor()}}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </Item>
                ))}
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
    title: PropTypes.string,
  };