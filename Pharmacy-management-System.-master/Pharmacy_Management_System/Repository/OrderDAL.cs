using Pharmacy_Management_System.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Pharmacy_Management_System.Repository
{
    public class OrderDAL : IOrderRepository
    {
        private readonly PharmacyContextDb _db;
        public OrderDAL(PharmacyContextDb db)
        {
            _db = db;
        }

        #region AddOrder

        /// <summary>
        /// Adding New Order
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        /// 
        public string AddOrder(Order order)
        {
            try
            {
                _db.OrderDetails.Add(order);
                _db.SaveChanges();
                return "Order is Successfully Added";
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        #endregion


        #region DeleteOrder

        /// <summary>
        /// Deleting Order
        /// </summary>
        /// <param name="id"></param>
        /// 
        public void DeleteOrder(int id)
        {
            try
            {
                var item = _db.OrderDetails.FirstOrDefault(c => c.OrderId == id);
                if (item != null)
                {

                    _db.OrderDetails.Remove(item);
                    _db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        #endregion


        #region GetAllOrders

        /// <summary>
        /// GetAllOrders
        /// </summary>
        /// <returns></returns>
        public List<Order> GetAllOrders()
        {
            List<Order> list = new List<Order>();
            try
            {
                list = _db.OrderDetails.ToList();
                return list;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        #endregion


        #region GetOrderById

        /// <summary>
        /// Get Order by Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Order GetOrderById(int id)
        {
            try
            {
                var item = _db.OrderDetails.FirstOrDefault(c => c.DrugId == id);
                if (item == null)
                {
                    return null;
                }
                else
                {
                    return item;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        #endregion


        #region UpdateOrder

        /// <summary>
        /// Update the existing Order
        /// </summary>
        /// <param name="id"></param>
        /// <param name="drug"></param>
        public void UpdateOrder(int id, Order order)
        {
            var item = new Order();
            try
            {
                item = _db.OrderDetails.FirstOrDefault(d => d.OrderId == id);
                if (item != null)
                {
                    _db.Entry(item).CurrentValues.SetValues(order);
                    _db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                item = null;
            }
        }

    
        #endregion

    }
}
