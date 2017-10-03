export class User {
    _id:        string;
    email:      string;
    password:   string;
    firstName:  string;
    lastName:   string;
    url:        string;
    phoneNo:    string;
    address:    string;
    linkedIn:   string;
    instagram:  string;
    pinterest:  string;
    languages: [{
      langName: string;
      langLevel: {
        type: string;
        enum: ["Elementary", "Intermediate", "Advanced", "Mother Tongue"]
      }
    }];
    hardskills: [{
      hskillName: string;
      hskillLevel: {
        type: Number;
        enum: [1, 2, 3, 4]
      }
    }];
    softskills: [{
      sskillName: string;
      sskillLevel: {
        type: Number;
        enum: [1, 2, 3, 4]
      }
    }];
    education: [{
      schoolName: string;
      timePeriod: string;
      title: string
    }];
    complementaryEducation: [{
      schoolName: string;
      timePeriod: string;
      title: string
    }];
    experience: [{
      startDate: string;
      endDate: string;
      jobName: string;
      jobDescription: string
    }];
    profile: string;
    interests: Array<string>
}
