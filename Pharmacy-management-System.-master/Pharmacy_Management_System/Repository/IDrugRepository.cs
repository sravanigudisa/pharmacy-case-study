using Pharmacy_Management_System.Model;
using System.Collections.Generic;

namespace Pharmacy_Management_System.Repository
{
    public interface IDrugRepository
    {

        List<Drug> GetAllDrugs();
        Drug GetDrugById(int id);
        void DeleteDrug(int id);
        void UpdateDrug(int id, Drug drug);
        string AddDrug(Drug drugs);


    }
}
