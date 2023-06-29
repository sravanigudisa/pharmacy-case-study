using Pharmacy_Management_System.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Pharmacy_Management_System.Repository
{
    public class DrugDAL : IDrugRepository
    {
        private readonly PharmacyContextDb _db;
        public DrugDAL(PharmacyContextDb db)
        {
            _db = db;
        }

        #region AddDrug

        /// <summary>
        /// Adding New Drug
        /// </summary>
        /// <param name="drugs"></param>
        /// <returns></returns>
        /// 
        public string AddDrug(Drug drugs)
        {
            try
            {
                _db.DrugDetails.Add(drugs);
                _db.SaveChanges();
                return "Drug is Successfully Added";
            }
            catch (Exception ex)
            {
                throw ;
            }

        }
        #endregion


        #region DeleteDrug

        /// <summary>
        /// Deleting Drugs
        /// </summary>
        /// <param name="id"></param>
        /// 
        public void DeleteDrug(int id)
        {
            try
            {
                var item = _db.DrugDetails.FirstOrDefault(c => c.DrugId == id);
                if (item != null)
                {

                    _db.DrugDetails.Remove(item);
                    _db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        #endregion


        #region GetAllDrugs

        /// <summary>
        /// GetAllDrugs
        /// </summary>
        /// <returns></returns>
        public List<Drug> GetAllDrugs()
        {
            List<Drug> list = new List<Drug>();
            try
            {
                list = _db.DrugDetails.ToList();
                return list;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion


        #region GetDrugById

        /// <summary>
        /// Get Drug by Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Drug GetDrugById(int id)
        {
            try
            {
                var item = _db.DrugDetails.FirstOrDefault(c => c.DrugId == id);
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


        #region UpdateDrug

        /// <summary>
        /// Update the existing Drug
        /// </summary>
        /// <param name="id"></param>
        /// <param name="drug"></param>
        public void UpdateDrug(int id, Drug drug)
        {
            var item = new Drug();
            try
            {
                item = _db.DrugDetails.FirstOrDefault(d => d.DrugId == id);
                if (item != null)
                {
                    _db.Entry(item).CurrentValues.SetValues(drug);
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
