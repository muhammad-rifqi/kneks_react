import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch("http://api.rifhandi.com/react/product.php")
      .then(response => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      });
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const ajx = new XMLHttpRequest();

  console.log(ajx)

  return (
    // <div>
    //   <h3> Data Produk </h3>
    //   <table width={300}>
    //     <tbody>
    //       {data.map((post) => (
    //         <tr key={post.id}>
    //           <td> <img src={post.foto} width={100} height={100} alt=""/></td>
    //           <td>{post.nama_produk}</td>
    //           <td><Link to={'detail/'+post.id}>Detail</Link></td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <main role="main">

      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href={() => false} className="btn btn-primary my-2">Main call to action</a> &nbsp; 
            <a href={() => false} className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">

            {data.map((post) => (

              <div className="col-md-4" key={post.id}>
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src={post.foto} alt="Card cap" />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to={'detail/' + post.id} className="btn btn-sm btn-outline-secondary">View</Link>
                        <Link to={'detail/' + post.id} className="btn btn-sm btn-outline-secondary">View</Link>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}
export default Home;
