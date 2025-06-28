import React from 'react'
import webDesign from '../../images/certificates/images/HackerRank/pb basic/problem_solving_basic certificate-1.png'
import javascript from '../../images/certificates/images/HackerRank/pb inter/problem_solving_intermediate certificate-1.png'
import frontend from '../../images/certificates/images/HackerRank/pyt/python_basic certificate-1.png'
import backend from '../../images/certificates/images/info/db/DB2/1-b7dfbd2f-7c95-4a38-ba75-62f8b6c86e5e-1.png'
import database from '../../images/certificates/images/info/db/DB1/DB1.png'
import python from '../../images/certificates/images/info/java/1-d67e95cb-85fe-4328-90a4-8ca1347c432e-1.png'
import java from '../../images/certificates/images/info/db/No/1-305d3c01-d353-48ce-901b-da64a747bc6d-1.png'
import spring from '../../images/certificates/images/info/spring/Spring.jpg'
class Certificates extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <>
            <div className="container  mt-5 justify-content-center align-items-center" id="certificate">

                <div className='row m-1 justify-content-center'>
                    <div className='col'>
                        <h2>Certifications</h2>
                    </div>
                    <div className='w-100'></div>
                    <div className="col-lg-4  m-1 p-3 shadow rounded border">
                        <a href={webDesign} target='__blank'><img src={webDesign} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.hackerrank.com/certificates/b91303c85d9c" target="_blank"><h4 className='mt-1 mb-0'>Problem Solving Basic</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={javascript} target='__blank'><img src={javascript} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.hackerrank.com/certificates/445ba4748312" target='_blank'><h4 className='mt-1 mb-0'>Problem Solving Intermediate</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={frontend} target='__blank'><img src={frontend} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://www.hackerrank.com/certificates/9cc4eaf63d30" target='_blank'><h4 className='mt-1 mb-0'>Python Basic</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={database} target='__blank'><img src={database} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://drive.google.com/file/d/1qas1WmW000yMvcRjiAXPZUMllHV-X5nQ/view?usp=sharing" target='_blank'><h4 className='mt-1 mb-0'>DBMS 1</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={backend} target='__blank'><img src={backend} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://drive.google.com/file/d/1qas1WmW000yMvcRjiAXPZUMllHV-X5nQ/view" target='blank'><h4 className='mt-1 mb-0'>DBMS 2</h4></a>
                    </div>
                    
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={python} target='__blank'><img src={python} alt="certificate" className=' border img-fluid shadow'/></a>
                        <a href="https://drive.google.com/file/d/1nBxybzI5QZ5AhOBMp74DUs3c1o5TLZKN/view?usp=sharing" target='_blank'><h4 className='mt-1 mb-0'>Programming using Java</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={java} target='__blank'><img src={java} alt="certificate" className=' border img-fluid w-100 shadow'/></a>
                        <a href="https://drive.google.com/file/d/1gP76A3Rhxu4CoMw51iUci3RX0ybFcuNA/view?usp=sharing" target='_blank'><h4 className='mt-1 mb-0'>No SQL</h4></a>
                    </div>
                    <div className="col-lg-4 m-1 p-3 shadow rounded border">
                        <a href={java} target='__blank'><img src={spring} alt="certificate" className=' border img-fluid w-100 shadow'/></a>
                        <a href="https://drive.google.com/file/d/1DXaJXlLvsTHsz0_bQbGY3t7dxDwsxyC5/view?usp=sharing" target='_blank'><h4 className='mt-1 mb-0'>Complete SpringBoot with Cloud</h4></a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Certificates;