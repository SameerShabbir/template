<template>
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

        <breadcrumb1></breadcrumb1>

		<!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                    <div class="stickyside">

                    <doctorsidebar></doctorsidebar>

                    </div>
                        
                    </div>
                    
                    <div class="col-md-7 col-lg-8 col-xl-9">

                        <div class="row">
                            
                            <accountfirst></accountfirst>

                            <accountsecond></accountsecond>

                        </div>

                        <accounttable></accounttable>
                            
                    </div>
                </div>

            </div>

        </div>		
        <!-- /Page Content -->
		
        <layout-footer></layout-footer>
        
    </div>
    <!-- Payment Request Moodal -->

    <div class="modal fade custom-modal" id="payment_request_modal" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Payment Request</h3>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form id="payment_request_form" method="post">
                        <input type="hidden" name="payment_type" id="payment_type" value="1">
                        <div class="form-group">
                            <label>Request Amount</label>
                            <input type="text" name="request_amount" id="request_amount" class="form-control" maxlength="6" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
                            <span class="help-block"></span>
                        </div>
                        <div class="form-group">
                            <label>Description (Optional)</label>
                            <textarea class="form-control" name="description" id="description"></textarea>
                            <span class="help-block"></span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button type="submit" id="request_btn" class="btn btn-primary">Request</button>
                </div>
            </div>
        </div>
    </div>

    <!-- /Payment Request Moodal -->

    <!-- Account Details Modal-->
    <div class="modal fade custom-modal" id="account_modal" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Account Details</h3>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <form id="accounts_form" method="post">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Bank Name</label>
                                    <input type="text" name="bank_name" class="form-control bank_name" value="Wells Fargo & Co">
                                    <span class="help-block"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Branch Name</label>
                                    <input type="text" name="branch_name" class="form-control branch_name" value="Lenexa">
                                    <span class="help-block"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Account Number</label>
                                    <input type="text" name="account_no" class="form-control account_no" value="5396 5250 1908 3838">
                                    <span class="help-block"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Account Name</label>
                                    <input type="text" name="account_name" class="form-control acc_name" value="Dr. Darren Elder">
                                    <span class="help-block"></span>
                                </div>
                            </div> 
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button type="submit" id="acc_btn" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /Account Details Modal-->
</template>

<script>
export default {
	mounted() {

	},
    data() {
        return {

        }
    }
}
</script>