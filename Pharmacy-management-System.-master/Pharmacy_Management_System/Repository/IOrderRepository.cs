using Pharmacy_Management_System.Model;
using System.Collections.Generic;

namespace Pharmacy_Management_System.Repository
{
    public interface IOrderRepository
    {

        List<Order> GetAllOrders();
        Order GetOrderById(int id);
        void DeleteOrder(int id);
        void UpdateOrder(int id, Order drug);
        string AddOrder(Order drugs);
    }
}
