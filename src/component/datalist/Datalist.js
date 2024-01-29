import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const Datalist = () => {

    const [state,setState]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);



    const getTotal=(async()=>{
        try{
            let response = await axios.get("http://localhost:3004/save")
            setTotal(response.data.length/5);
        }
        catch(err){console.log(err);}
    })

        getTotal();

    const getData=(async()=>{
        try{
            let response = await axios.get("http://localhost:3004/save?_page="+page+"&_limit=5")
            setState(response.data)
        }
        catch(err){console.log(err);}
    })
    
    useEffect(()=>{
        getData();
    },[page])

    const deleteData=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:3004/save/"+id)
                .then((res)=>{
                    console.log(res);
                })

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                getData();
            }
          });
    }

    const handlePageClick = (data)=>{
        setPage(data.selected + 1);
    }

  return (
    <>
        <div className="container">
        <div className="row">
                <div className="col-md-12 fs-2 mx-5" style={{color:"#5d54a4"}}>Data List</div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table class="table table-dark table-hover">
                        <thead>
                            <th scope='col'>ID</th>
                            <th scope='col'>Email ID</th>
                            <th scope='col'>Password</th>
                            <th scope='col'>Action</th>
                        </thead>
                        <tbody>
                            {
                                state.map((item,index)=>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.email_id}</td>
                                    <td>{item.pass}</td>
                                    <td>
                                        <Link className='btn btn-success' to={`/update/${item.id}`}>Update</Link> &nbsp;
                                        <Link className='btn btn-danger' onClick={()=>{deleteData(item.id)}}>Delete</Link>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            pageCount={total}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={6}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Datalist
