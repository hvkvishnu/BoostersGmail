export interface MailInterface {
  isStarred: any;
  name: {first:any, last:any };
  subject:any;
  description: any;
  fromEmail: any;
  date: any;
}

/*
index: '{{index()}}',
      isStarred: '{{bool()}}',
      name: {
        first: '{{firstName()}}',
        last: '{{surname()}}'
      },
      subject:'{{lorem(3,"words")}}',
      description:'{{lorem(1,"sentences")}}',
      fromEmail(tags) {
        return `${this.name.first}.${this.name.last}@.${company()}${tags.domainZone()}`.toLowerCase();
      },
       date: '{{moment(this.date(new Date(2020, 0, 1), new Date())).format("LT")}}',
*/