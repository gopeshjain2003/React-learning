import React from 'react' ;

// Here we are injecting the props feature and 'name' is from App.jsx
function Card({name})
{
    // console.log(props) ;
    // console.log(props.username) ;
    console.log(name) ;
    
    return (

        <>
            <div className="flex flex-col rounded-xl  p-4 m-4"
                style={{
                    border: '0.88px solid',
            
                    backdropFilter: 'saturate(180%) blur(14px)',
                    background: ' #ffffff0d',
                }}
            >
                <div className='relative h-[400px] w-[300px] rounded-md '>
                    <img
                    src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
                    alt="nft-gif"
                    width="400"
                    height="400"
                    className="rounded-xl"
                    />
                </div>

                <div className="flex flex-col  rounded-b-xl py-4 ">
                    <div className="flex justify-between">
                        {/* Here below we are making a dynamic update  */}
                        <h1 className="font-RubikBold ">{name}</h1>
                        <h1 className="font-bold font-RubikBold">Price</h1>
                    </div>
                    <div className="flex  justify-between font-mono">
                        <p>#345</p>
                        <p>0.01</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;