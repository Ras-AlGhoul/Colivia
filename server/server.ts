// import app  from './app.js';
import config from 'config'
const port = config.get('port') as number;
const host = config.get('host') as string
// app.listen(port, () => {
//     console.log(`app is running on ${port}`);
//   });
