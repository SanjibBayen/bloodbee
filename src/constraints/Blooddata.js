export const bloodData = [
    {
      id: 1,
      blood_bank: "Dr. Bidhan Chandra Roy Hospital Blood Centre, Haldia",
      state: "West Bengal",
      district: "Purba Medinipur",
      category: "Private",
      availability: "Available, A+Ve:2, O+Ve:1",
      last_updated: "2025-03-15 23:42:49",
      type: "Whole Blood"
    },
    {
      id: 2,
      blood_bank: "General Hospital, Mumbai",
      state: "Maharashtra",
      district: "Mumbai",
      category: "Government",
      availability: "Available, B+Ve:3, AB+Ve:2",
      last_updated: "2025-03-14 18:30:00",
      type: "Plasma"
    },
    {
      id: 3,
      blood_bank: "City Hospital, Kolkata",
      state: "West Bengal",
      district: "Kolkata",
      category: "Private",
      availability: "Available, O+Ve:4, A+Ve:3",
      last_updated: "2025-03-13 12:00:00",
      type: "Platelets"
    },
    {
      id: 4,
      blood_bank: "Apollo Hospital, Chennai",
      state: "Tamil Nadu",
      district: "Chennai",
      category: "Private",
      availability: "Available, B+Ve:5, O+Ve:2",
      last_updated: "2025-03-12 14:00:00",
      type: "Whole Blood"
    },
    {
      id: 5,
      blood_bank: "AIIMS, Delhi",
      state: "Delhi",
      district: "New Delhi",
      category: "Government",
      availability: "Available, AB+Ve:3, A+Ve:4",
      last_updated: "2025-03-11 10:00:00",
      type: "Whole Blood"
    },
    {
      id: 6,
      blood_bank: "Guwahati Medical College Blood Bank",
      state: "Assam",
      district: "Guwahati",
      category: "Government",
      availability: "Available, O+Ve:3, B+Ve:2",
      last_updated: "2025-03-10 09:00:00",
      type: "Fresh Frozen Plasma"
    },
    {
      id: 7,
      blood_bank: "PGI Chandigarh Blood Bank",
      state: "Punjab",
      district: "Chandigarh",
      category: "Government",
      availability: "Available, A+Ve:2, AB+Ve:1",
      last_updated: "2025-03-09 16:45:00",
      type: "Packed Red Blood Cells"
    },
    {
      id: 8,
      blood_bank: "Bangalore Medical College Blood Bank",
      state: "Karnataka",
      district: "Bangalore",
      category: "Government",
      availability: "Available, B+Ve:4, O+Ve:3",
      last_updated: "2025-03-08 11:30:00",
      type: "Single Donor Platelet"
    },
    {
      id: 9,
      blood_bank: "Christian Medical College Blood Bank",
      state: "Tamil Nadu",
      district: "Vellore",
      category: "Private",
      availability: "Available, O+Ve:5, A+Ve:2",
      last_updated: "2025-03-07 15:20:00",
      type: "Cryoprecipitate"
    },
    {
      id: 10,
      blood_bank: "KEM Hospital Blood Bank",
      state: "Maharashtra",
      district: "Pune",
      category: "Government",
      availability: "Available, AB+Ve:3, B+Ve:4",
      last_updated: "2025-03-06 14:00:00",
      type: "Leukoreduced Rbc"
    },
    {
      id: 11,
      blood_bank: "SCB Medical College Blood Bank",
      state: "Odisha",
      district: "Cuttack",
      category: "Government",
      availability: "Available, A+Ve:3, O+Ve:2",
      last_updated: "2025-03-05 13:10:00",
      type: "Irradiated RBC"
    },
    {
      id: 12,
      blood_bank: "SMS Hospital Blood Bank",
      state: "Rajasthan",
      district: "Jaipur",
      category: "Government",
      availability: "Available, B+Ve:2, AB+Ve:3",
      last_updated: "2025-03-04 12:00:00",
      type: "Plasma"
    },
    {
      id: 13,
      blood_bank: "Gandhi Hospital Blood Bank",
      state: "Telangana",
      district: "Hyderabad",
      category: "Government",
      availability: "Available, O+Ve:3, A+Ve:4",
      last_updated: "2025-03-03 10:45:00",
      type: "Platelet Rich Plasma"
    },
    {
      id: 14,
      blood_bank: "GMC Blood Bank",
      state: "Goa",
      district: "Panaji",
      category: "Government",
      availability: "Available, A+Ve:3, B+Ve:2",
      last_updated: "2025-03-02 09:30:00",
      type: "Whole Blood"
    },
    {
      id: 15,
      blood_bank: "IMS & SUM Hospital Blood Bank",
      state: "Odisha",
      district: "Bhubaneswar",
      category: "Private",
      availability: "Available, O+Ve:4, AB+Ve:2",
      last_updated: "2025-03-01 08:45:00",
      type: "Cryo Poor Plasma"
    }
];

  
  export const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];
  
  export const districts = {
    "West Bengal": ["Purba Medinipur", "Kolkata", "Howrah", "Darjeeling"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    "Delhi": ["New Delhi", "Central Delhi", "East Delhi", "West Delhi"],
    // Add more states and districts as needed
  };
  
  export const bloodGroups = [
    "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
  ];
  
  export const bloodTypes = [
    "Whole Blood", "Plasma", "Platelets", "Single Donor Platelet", "Single Donor Plasma", "Sagm Packed Red Blood Cells", "Random Donor Platelets", "Platelet Rich Plasma", "Platelet Concentrate", "Packed Red Blood Cells", "Leukoreduced Rbc", "Irradiated RBC", "Fresh Frozen Plasma", "Cryoprecipitate", "Cryo Poor Plasma"
  ];