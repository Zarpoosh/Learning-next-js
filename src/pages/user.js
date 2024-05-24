function Products(props) {

  return (
    <div>
      <h1 className="text-4xl font-bold m-3">{props.username}</h1>
    </div>
  );
}

export default Products;

export async function getServerSideProps(context) {
    const {params,res,req}=context
    console.log("req=======>>>", req);
    console.log("res=======>>>", res);
    return {
      props: {
        username: "MINOOOOO",
      },
    };
}