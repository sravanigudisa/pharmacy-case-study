using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Pharmacy_Management_System.Model
{
    public class Drug
    {
        [Key]
        public int DrugId { get; set; }


        [Column(TypeName = "varchar(25)")]
        [Required(ErrorMessage = "DrugName cannot be empty")]
        public string DrugName { get; set; }

        
        [Required(ErrorMessage = "Price cannot be empty")]
        public double DrugPrice { get; set; }

        
        [Required(ErrorMessage = "Quantity should be greater than or equal to 1")]
        public int DrugQuantity { get; set; }


        [Required(ErrorMessage = "Please Follow the date formate (MM/DD/YYYY)")]
        public DateTime MfdDate { get; set; }


        [Required(ErrorMessage ="Please Follow the date formate (MM/DD/YYYY)")]
        public DateTime ExpDate { get; set; }


        [Required (ErrorMessage ="Supplier Id should be required")]
        [ForeignKey("Supplier")]
        public int SupplierId { get; set; }
        [JsonIgnore]

        public virtual Supplier supplier { get; set; }

    }
}
