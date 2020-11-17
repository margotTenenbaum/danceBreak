const wrapper = {
  display: 'grid',
  width: '1000px',
  gridTemplateColumns: '2fr 1fr',
  girdTemplateRows: '1fr 1fr 1fr',
  gridRowGap: '10px',
  gridColumnGap: '45px',
  backgroundColor: 'pink',
  padding: '25px'
}

const title = {
  fontWeight: '1300',
  fontSize: '500%',
  gridRowStart: '1',
  gridColumnStart: '1',
  paddingTop: '80px'
}

const discoBall = {
  backgroundImage: 'url("http://127.0.0.1:3000/croppedDiscoBall.png")',
  height: '325px',
  width: '275px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  gridRowStart: '1',
  gridRowEnd: '3',
  gridColumnStart: '2'
}

const form = {
  gridRowStart: '2',
  gridColumnStart: '1'
}

const player = {
  gridRowStart: '3',
  gridColumnStart: '1'
}

const playlist = {
  gridRowStart: '3',
  gridColumnStart: '2'
}

const table = {
  border: '3px solid black',
  background: 'gray'
}

const td = {
  padding: '15px',
  textAlign: 'left',
  borderBottom: '1px solid black'
}

const tdArtist = {
  padding: '15px',
  textAlign: 'left',
  borderBottom: '1px solid black',
  borderRight: '1px solid black',
  cursor: 'pointer'
}

const th = {
  padding: '15px',
  textAlign: 'center',
  fontWeight: 'bold',
  borderBottom: '1px solid black'
}

const button = {
  color: 'white',
  fontWeight: 'bold',
  background: 'gray',
  padding: '10px',
  borderRadius: '5px',
  border: '3px solid black',
  align: 'center',
  cursor: 'pointer'
}


export {
  wrapper,
  discoBall,
  title,
  form,
  player,
  playlist,
  table,
  td,
  tdArtist,
  th,
  button
}