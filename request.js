function request(fullname, requestdate, requesttitle, prayerrequest) {
  this.fullname = fullname;
  this.requestdate = requestdate;
  this.requesttitle = requesttitle;
  this.prayerrequest = prayerrequest;
  this.answereddate = '';
}

export default request;
