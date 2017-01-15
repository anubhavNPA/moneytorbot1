var DPDrules = require('.././rulebook/DPDrules')();
var Creditrules = require('.././rulebook/CreditRules')();
var AbilityRules = require('.././rulebook/AbilityRules')();
var PersonalRules = require('.././rulebook/PersonalRules')();
var SecurityRules = require('.././rulebook/SecurityRules')();
var StabilityRules = require('.././rulebook/StabilityRules')();
var DefaultAmountRules = require('.././rulebook/DefaultAmountRules')();
var AgencyAllocationRules = require('.././rulebook/AgencyAllocationRules')();


var reportedDPD;
var reportedIsSecured;
var reportedDefaultAmount;
var reportedIsSalaried;
var reportedIsInJob;
var reportedMonthsOutOfJob;
var reportedSelfEmployedProfession;
var reportedIsResidenceOnRent;
var reportedAge;
var reportedReligion;
var reportedLocality_ID;
var reportedAgeOfDefault;
var reportedDPDHistory;
var reportedDPDIndex;
var reportedHasOtherDefaults;

reportedDPD = 181;
reportedAge = 28;
reportedIsResidenceOnRent = true;
reportedDefaultAmount = 100;
reportedIsSecured = false;
reportedReligion = 'muslim';
reportedLocality_ID = 'B';
reportedIsSalaried = false;
reportedSelfEmployedProfession = 'lawyer';
reportedDPDIndex = 'good';
reportedIsInJob = true;

/*

console.log(DPDbucketRule(reportedDPD));

console.log(SecurityRule());

console.log(DefaultAmountRule(reportedDefaultAmount));

console.log(AgencyAllocationRule(reportedIsSecured, reportedDPD));

console.log(IncomeStabilityRule(reportedIsSalaried, reportedSelfEmployedProfession));

console.log(ResidenceStabilityRule(reportedIsResidenceOnRent));

console.log(PersonalRule(reportedAge, reportedReligion));

console.log(LocalityRule(reportedLocality_ID));

console.log(CreditRule(reportedIsSecured, reportedDPDIndex));

console.log(AbilityRule(reportedIsInJob));
*/



