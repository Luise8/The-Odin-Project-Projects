// Const with component default values

const example = {
  contactInformation: [
    { key: "address", text: "Add your address" },
    { key: "phoneNumber", text: "Add your phone number" },
    { key: "email", text: "Add your email" },
    { key: "linkedin", text: "Add your Linkedin" },
    { key: "website", text: "Add your website" },
  ],
  imageProfile: "/images/avatar.png",
  mainInformation: [
    { key: "fullName", text: "Add your full name" },
    {
      key: "positionTitle",
      text: "Add your Position Title",
    },
    { key: "resume", text: "Add your resume" },
  ],

  skills: [
    [
      { id: "skill-1" },
      {
        key: "skill",
        text: "CSS",
        tag: "p",
        className: "paragraph special-paragraph",
      },
    ],
    [
      { id: "skill-2" },
      {
        key: "skill",
        text: "JavaScript",
        tag: "p",
        className: "paragraph special-paragraph",
      },
    ],
    [
      { id: "skill-3" },
      {
        key: "skill",
        text: "HTML",
        tag: "p",
        className: "paragraph special-paragraph",
      },
    ],
    [
      { id: "skill-4" },
      {
        key: "skill",
        text: "React",
        tag: "p",
        className: "paragraph special-paragraph",
      },
    ],
  ],
  education: [
    [
      { id: "education-1" },
      {
        key: "institution",
        text: "Harvard University",
        tag: "h3",
        className: "second-title right-main-second-title",
      },
      {
        key: "degree",
        text: "Computer Science",
        tag: "h4",
        className: "title-fourth right-main-title-fourth",
      },
      {
        key: "dateFrom",
        text: "2010-11-15",
        tag: "p",
        tag: "p",
        className: "smallest-paragraph right-main-smallest-paragraph date",
      },
      {
        key: "dateTo",
        text: "2015-11-15",
        tag: "p",
        className:
          "smallest-paragraph right-main-smallest-paragraph date dateTo",
      },
    ],
  ],
  experience: [
    [
      { id: "experience-1" },
      {
        key: "positionTitle",
        text: "Web Developer",
        tag: "h3",
        className: "title-third right-main-title-third",
      },
      {
        key: "companyName",
        text: "Company 1",
        tag: "h4",
        className: "title-fourth right-main-title-fourth",
      },
      {
        key: "dateFrom",
        text: "2015-12-10",
        tag: "p",
        className: "smallest-paragraph right-main-smallest-paragraph date",
      },
      {
        key: "dateTo",
        text: "2017-05-15",
        tag: "p",
        className:
          "smallest-paragraph right-main-smallest-paragraph date dateTo",
      },
      {
        key: "Location",
        text: "Remote",
        tag: "p",
        className: "smallest-paragraph right-main-smallest-paragraph",
      },
      {
        key: "mainTasks",
        text: "Make great things",
        tag: "p",
        className: "paragraph right-main-paragraph",
      },
    ],
    [
      { id: "experience-2" },
      {
        key: "positionTitle",
        text: "Back-end Developer",
        tag: "h3",
        className: "title-third right-main-title-third",
      },
      {
        key: "companyName",
        text: "Company 2",
        tag: "h4",
        className: "title-fourth right-main-title-fourth",
      },
      {
        key: "dateFrom",
        text: "2017-05-20",
        tag: "p",
        className: "smallest-paragraph right-main-smallest-paragraph date",
      },
      {
        key: "dateTo",
        text: "2022-11-01",
        tag: "p",
        className:
          "smallest-paragraph right-main-smallest-paragraph date dateTo",
      },
      {
        key: "Location",
        text: "Remote",
        tag: "p",
        className: "smallest-paragraph right-main-smallest-paragraph",
      },
      {
        key: "mainTasks",
        text: "Make also great things",
        tag: "p",
        className: "paragraph right-main-paragraph",
      },
    ],
  ],
};

export default example;
