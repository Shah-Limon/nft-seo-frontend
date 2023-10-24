import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setorders] = useState([]);
    const [user] = useAuthState(auth)

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setorders(info));
  }, []);
    return (
        <div>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Prduct Name</th>
                  <th>Price</th>
                  <th>You</th>
                  <th>Payment Status</th>
                  <th>Order Status</th>
                  <th>Delivery Status</th>
                  <th>Payment Option</th>
                  <th>Your Number & TrID</th>
                  
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => user?.email === order.customerEmail
                 &&
                    <tr>
                      <th className="w-[150px] whitespace-normal break-all">{order.ProductName}</th>
                      <td>{order.ProductPrice}</td>
                      <td>
                        <h2 className="font-bold">{order.customerName}</h2>
                        {order.customerAddress},<br></br>{order.customerUpozilaName},
                        {order.customerDistrictName}
                        <h2>{order.customerPhoneNumber}</h2>
                      </td>
                      <td>
                        {order.paymentStatus === 'Pending' && <>Payment Is Pending </>}
                        {order.paymentStatus === 'Received' && <>Payment Is Received </>}
                        
                        </td>
                      <td>
                        {order.orderStatus === "Pending" && (
                          <>
                            <p className="font-bold">Order Pending</p>
                            
                          </>
                        )}
                        {order.orderStatus === "Cancelled" && (
                          <>
                            <p className="font-bold">Order Cancelled</p>
                            
                          </>
                        )}
                        {order.orderStatus === "Accepted" && (
                          <>
                            <p className="font-bold">Order Accepted</p>
                           
                          </>
                        )}
                      </td>
                      <td>
                        {order.deliveryStatus === 'NotDelivered' && <>Not Delivered <br></br> </>}
                        {order.deliveryStatus === 'Delivered' && <>Delivered <br></br> </>}
                        {order.deliveryStatus === 'ProcessingDelivery' && <>Delivery is Processing <br></br> </>}
                      </td>
                      <td>{order.paymentOptionName}</td>
                      <td>
                        {order.customerAccountNumber} & <br></br>{" "}
                        {order.paymentTRansactionID}
                      </td>
                    </tr>
                  )
                  .reverse()}
              </tbody>
            </table>
        </div>
    );
};

export default MyOrders;