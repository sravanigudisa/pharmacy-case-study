using Pharmacy_Management_System.Model;
using Pharmacy_Management_System.Repository;
using System.Collections.Generic;

namespace Pharmacy_Management_System.Services
{
    public class OrderService
    {
        private readonly OrderDAL _order;

        public OrderService(OrderDAL order)
        {
            _order = order;
        }

        public string AddOrder(Order order)
        {
            return _order.AddOrder(order);
        }

        public void DeleteOrder(int id)
        {
            _order.DeleteOrder(id);
        }

        public List<Order> GetAllOrders()
        {
            return _order.GetAllOrders();
        }

        public Order GetOrderById(int id)
        {
            return _order.GetOrderById(id);
        }

        public void UpdateOrder(int id, Order order)
        {
            _order.UpdateOrder(id, order);
        }
    }
}
