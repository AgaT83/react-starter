import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/>{this.props.title}</span></h3>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        <div className={styles.cards}>
        {this.state.cards.map(({key, ...cardProps}) => (<Card key={key} {...cardProps} />
        ))}
        </div>
      </section>
    )
  }
}

export default Column;