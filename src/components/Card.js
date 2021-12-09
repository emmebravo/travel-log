import { MapPin } from 'phosphor-react';

function Card(props) {
  return (
    <section className='card--container'>
      <article>
        <img
          src={`${props.item.imageUrl}`}
          className='card--img'
          alt={props.item.title}
        />
      </article>
      <article className='card--info'>
        <MapPin weight='fill' color='#f55a5a' />{' '}
        <span className='card--location'>{props.item.location}</span>
        <a
          href={`${props.item.googleMapsUrl}`}
          rel='noreferrer'
          target='_blank'
          className='card--google'
        >
          View on Google Maps
        </a>
        <h2>{props.item.title}</h2>
        <span className='card--dates'>
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p>{props.item.description}</p>
      </article>
    </section>
  );
}

export default Card;
