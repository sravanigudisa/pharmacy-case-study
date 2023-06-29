using Pharmacy_Management_System.Model;
using Pharmacy_Management_System.Repository;
using System.Collections.Generic;

namespace Pharmacy_Management_System.Services
{
    public class DrugService
    {
        private readonly DrugDAL _drug;
        public DrugService(DrugDAL drug)
        {
            _drug = drug;
        }

        public string AddDrug(Drug drugs)
        {
            return _drug.AddDrug(drugs);

        }

        public void DeleteDrug(int id)
        {
            _drug.DeleteDrug(id);
        }

        public List<Drug> GetAllDrugs()
        {
            return _drug.GetAllDrugs();
        }

        public Drug GetDrugById(int id)
        {
            return _drug.GetDrugById(id);
        }

        public void UpdateDrug(int id, Drug drug)
        {
            _drug.UpdateDrug(id, drug);
        }
    }
}
