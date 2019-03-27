import React from 'react';

function Cat(props) {
  const { type = '',
          text = '%20',
          fontSize = '50',
          color = 'white',
          filter = '',
          width = '',
          height = ''
        } = props;
  let url = `https://cataas.com/cat/${type}/says/${text}?s=${fontSize}&c=${color}&filter=${filter}&width=${width}&height=${height}`;

  return (
    <img src={url} />
  )

}

export default Cat