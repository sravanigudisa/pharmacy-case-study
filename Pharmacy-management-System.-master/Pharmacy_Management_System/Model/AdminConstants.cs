using System.Collections.Generic;

namespace Pharmacy_Management_System.Model
{
    public class AdminConstants
    {
        public static List<Admin> _admin = new List<Admin>()
        {
            new Admin(){AdminName="admin2",Contact="9876587960",EmailId="admin2@gmail.com",Password="admin2",Role="administrator" },
            new Admin(){AdminName="admin1",Contact="8976453240",EmailId="admin1@gmail.com",Password="admin1",Role="administrator"},
            new Admin(){AdminName="MainAdmin",Contact="9999988888",EmailId="gjssravani@gmail.com",Password="admin",Role="administrator"}
        };
    }
}
