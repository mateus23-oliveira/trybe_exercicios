const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let ana = order.order.delivery.deliveryPerson;
    let rafael = order.name;
    let fone = order.phoneNumber;
    let rua = order.address.street
    let num = order.address.number
    let ap = order.address.apartment
    order = `olá ${ana}, entrega para: ${rafael}, telefone: ${fone}, R.${rua}, N°: ${num}, AP: ${ap}`;
    return order;
  };
  
  customerInfo(order);
   order.name = 'Luiz silva';
  order.payment.total = 50;

  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
 
 
  let luis = order.name;
  let pizzas = Object.keys(order.order.pizza);
   let bebida = 'coco-cola zero'
   order = `Olá ${luis}, o total do do seu pedido de ${pizzas[0]}, ${pizzas[1]},.  e ${bebida}, e R$ 50,00. `

 
  console.log(order);

  };
  
  orderModifier(order);