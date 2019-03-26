import React from 'react';

function Cat(props) {
  const { type, filter, text, width, height } = props;
  let { fontSize, color } = props;
  let url = 'https://cataas.com';

  fontSize = fontSize ? fontSize : '50';
  color = color ? color : 'white';

  if (type === 'gif') {
    url += '/cat/gif'
  } else {
    url += '/cat'
  }

  if (text) {
    url += `/says/${text}?s=${fontSize}&c=${color}`
  }

  if (filter && text) {
    url += `&filter=${filter}`
  } else if (filter) {
    url += `?filter=${filter}`
  }

  if (width) {
    url += ``
  }

  return (
    <img src={url} />
  )

}

export default Cat