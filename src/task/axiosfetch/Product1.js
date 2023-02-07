import React from 'react'

function Product1() {
    const [product1, setProduct1] = useState([])
    const [open1, setOpen1] = useState(false)
    console.log(product1);
    useEffect(() => {
      fetchAPI();
    }, []);

    let fetchAPI=async()=>{
        let fetch
    }
    
  return (
    <div>
    </div>
  )
}

export default Product1