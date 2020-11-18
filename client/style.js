const wrapper = {
  display: 'grid',
  width: '1250px',
  gridTemplateColumns: '1fr 1fr 1fr',
  girdTemplateRows: '1fr 1fr 1fr',
  gridRowGap: '30px',
  gridColumnGap: '45px',
  backgroundColor: 'pink',
  padding: '25px'
}

const title = {
  fontWeight: '1300',
  fontSize: '500%',
  gridRowStart: '1',
  gridColumnStart: '1',
  gridColumnEnd: '3'
}

const discoBall = {
  backgroundImage: 'url("http://127.0.0.1:3000/croppedDiscoBall.png")',
  height: '325px',
  width: '275px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  gridRowStart: '1',
  gridRowEnd: '3',
  gridColumnStart: '3'
}

const form = {
  gridRowStart: '2',
  gridColumnStart: '1',
  gridColumnEnd: '3',
  fontWeight: '400',
  fontSize: '200%'
}

const input = {
  height: '30px',
  width: '600px'
}

const player = {
  gridRowStart: '3',
  gridColumnStart: '1',
  padding: '30px'
}

const center = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const playlist = {
  gridRowStart: '3',
  gridColumnStart: '2',
  gridColumnEnd: '4'
}

const table = {
  border: '3px solid black',
  background: 'gray',
  minWidth: '700px',
  fontSize: '125%',
  fontWeight: 'bold'
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
  fontSize: '150%',
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
  input,
  player,
  center,
  playlist,
  table,
  td,
  tdArtist,
  th,
  button
}