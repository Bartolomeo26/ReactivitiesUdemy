import { useEffect, useState } from "react"
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
function App()
{
  const [activites, setActivites] = useState<Activity[]>([]);
  useEffect(() =>
  {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => { setActivites(response.data) })
  }, [])

  return (
    <>
      <>
        <Typography variant='h3'>Reactivities</Typography>
        <List>
          {activites.map((activity) => <ListItem key={activity.id}><ListItemText>{activity.title}</ListItemText></ListItem>)
          }
        </List>
      </>
    </>
  )
}

export default App
