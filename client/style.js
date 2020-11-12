const wrapper = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  girdTemplateRows: '1fr 1fr 1fr',
  gridRowGap: '5px',
  backgroundColor: 'pink'
}

const title = {
  fontWeight: '1200',
  fontSize: '400%'
}

const discoBall = {
  backgroundImage: 'url("http://127.0.0.1:3000/discoBall.png")',
  height: '150px',
  width: '150px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}


export {
  wrapper,
  discoBall,
  title
}