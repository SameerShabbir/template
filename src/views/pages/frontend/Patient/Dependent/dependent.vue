<template>
    <div class="main-wrapper">

        <patientheader></patientheader>

        <breadcrumb18></breadcrumb18>

		<!-- Page Content -->
		<div class="content">
			<div class="container-fluid">
				<div class="row">

					<patientsidebar></patientsidebar>

					<div class="col-md-7 col-lg-8 col-xl-9">
						<div class="card">
							<div class="card-header">
								<div class="row">
									<div class="col-sm-6">
										<h3 class="card-title">Dependent</h3>
									</div>
									<div class="col-sm-6">
										<div class="text-end">
											<a href="#modal_form" data-bs-toggle="modal" class="btn btn-primary btn-sm" tabindex="0">Add Dependent</a>
										</div>
									</div>
								</div>
							</div>
							<div class="card-body ">

								<!-- Dependent Tab -->
								<div class="card card-table mb-0">
									<div class="card-body">
										<div class="table-responsive">
											<table class="table table-hover table-center mb-0">
												<thead>
													<tr>
														<th>Dependent</th>
														<th>Relationship</th>
														<th>gender</th>
														<th>Number</th>
														<th>Blood Group</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="item in dependent" :key="item.id">
														<td>
															<h2 class="table-avatar">
																<span class="avatar avatar-sm me-2">
																	<img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
																</span>
																{{item.name}}
															</h2>
														</td>
														<td>{{item.relationship}}</td>
														<td>{{item.gender}}</td>
														<td>{{item.phno}}</td>
														<td>{{item.blood}}</td>
														<td>
															<div class="table-action">
																<a href="#edit_form" class="btn btn-sm bg-info-light me-1" data-bs-toggle="modal">	<i class="fas fa-edit"></i> Edit</a>
																<a href="javascript:void(0);" class="btn btn-sm bg-danger-light"><i class="fas fa-times"></i> Deactive</a>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<!-- /Dependent Tab -->

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
    <!-- Add Dependent Modal-->
	<div id="modal_form" class="modal fade custom-modal" tabindex="-1" role="dialog" aria-modal="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<form action="#" enctype="multipart/form-data" autocomplete="off" method="post"> 
					<div class="modal-header">
						<h5 class="modal-title">Add new member</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label class="control-label mb-10"> Name <span class="text-danger">*</span></label>
							<input type="text" name="name" class="form-control">
						</div>
						<div class="form-group">
							<label class="control-label mb-10">Relationship </label>
							<input type="text" name="relationship" class="form-control">
						</div>
						<div class="form-group">
							<label class="control-label mb-10">Gender </label>
							<select class="form-select form-control" name="gender">
								<option value="">Select</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div class="form-group">
							<label class="control-label mb-10">DOB </label>
							<input type="text" name="dob" id="dob" value="" readonly="" class="form-control">
						</div>
						<div class="form-group">
							<label class="control-label mb-10">Photo </label>
							<input type="file" name="profile_image" class="form-control">
						</div>
					</div>
					<div class="modal-footer text-center">
						<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /Add Dependent Modal-->

	<!-- Edit Dependent Modal-->
	<div id="edit_form" class="modal fade custom-modal" tabindex="-1" role="dialog" aria-modal="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<form action="#" enctype="multipart/form-data" autocomplete="off" method="post"> 
					<div class="modal-header">
						<h5 class="modal-title">Edit member</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label class="control-label mb-10"> Name <span class="text-danger">*</span></label>
							<input type="text" name="name" class="form-control" value="Christopher">
						</div>
						<div class="form-group">
							<label class="control-label mb-10">Relationship </label>
							<input type="text" name="relationship" class="form-control" value="son">
						</div>
						<div class="form-group">
							<label class="control-label mb-10">Gender </label>
							<select class="form-select form-control" name="gender">
								<option value="">Select</option>
								<option value="Male" selected>Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div class="form-group">
							<label class="control-label mb-10">DOB </label>
							<input type="text" name="dob" id="editdob" value="01/12/2021" readonly="" class="form-control">
						</div>
						<div class="form-group">
							<label class="control-label mb-10">Photo </label>
							<input type="file"  name="profile_image" class="form-control">
						</div>
					</div>
					<div class="modal-footer text-center">
						<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /Edit Dependent Modal-->
</template>
<script>
import dependent from '../../../../../assets/json/Patient/dependent.json'
const images = require.context('../../../../../assets/img/patients', false, /\.png$|\.jpg$/)
export default {
	mounted() {

	},
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
    data() {
        return {
		dependent: dependent
        }
    }
}
</script>