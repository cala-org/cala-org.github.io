---
title: CALA Scholarships Application Form
layout: page
---

<!-- https://docs.netlify.com/forms/setup/ -->

<form name="fileForm" enctype="multipart/form-data" data-netlify="true">
  <div>
    <label>Are you currently a CALA member?</label>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefaultOne" id="flexRadioDefault1" checked>
      <label class="form-check-label" for="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefaultOne" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
      No
      </label>
    </div>
  </div>

  <div>
    <label>If you are not a CALA member or your membership has expired, please follow the link below to join or renew CALA membership before submitting the application. <a href="https://cala.wildapricot.org/join-us">Join or Renew CALA membership</a></label>
  </div>

  <div>
    <label>Are you of Chinese Heritage</label>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefaultTwo" id="flexRadioDefault1" checked>
      <label class="form-check-label" for="flexRadioDefault1">
      Yes
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefaultTwo" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
      No
      </label>
    </div>
  </div>

  <div>
    <label>
    Last Name: 
    <input type="text" name="lastName" />
    </label>
    <label>
    First Name:
    <input type="text" name="firstName" />
    </label>
    <label>
    Middle Name:
    <input type="text" name="midName" />
    </label>
    <label>
    Chinese Name:
    <input type="text" name="ChineseName">
    </label>
    <label>
    Mailing Address
    </label>
  </div>
  
  
  <div>
    <label>
      <span>Add file:</span>
      <input name="file" type="file"/>
    </label>
  </div>
  <button>Submit</button>
</form>
<p class="result"></p>
