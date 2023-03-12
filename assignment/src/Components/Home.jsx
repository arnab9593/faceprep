import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react'
import { useEffect, useState } from 'react'

const api = "https://randomuser.me/api/?results=500"

function Home() {

  const [loading, setLoading] = useState(false);
  const [postData, setData] = useState([]);

  const handleApi = async () => {
    setLoading(true)
    // try {
    //     // setLoading(true)
    //     const data = await getData();
    //     // console.log(data);
    //     setData(data);
    //     setLoading(false);
    // } catch (e) {
    //     setLoading(true);
    //     // console.log(e.message);
    // }
    fetch('https://randomuser.me/api/?results=500')
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.results);
        setData(res.results);
        setLoading(false);
      })
      .catch(e => {
        setLoading(true)
      })
  }

  useEffect(() => {
    handleApi()
  }, []);

  return (
    <div>
      <Button>Logout</Button>
      {postData?.map(item => (
        <Box w={300} border="2px solid black" textAlign="center" key={item.phone} margin="auto auto" mt={10}>
          <Image
            h={200}
            w={"100%"}
            src={item.picture.large}
            alt={item.name.first + "'s image not found"}
            borderRadius='lg'
          />
          <p>{item.name.title} {item.name.first} {item.name.last}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
          <p>{item.location.country}</p>
        </Box>
      ))}
    </div>
  )
}

export default Home