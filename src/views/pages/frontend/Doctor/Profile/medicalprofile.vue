<template>
 <!-- Medical Records Tab -->
                                    <div class="tab-pane fade" id="medical">
                                        <div class="text-end">		
                                            <a href="javascript:void(0);" class="add-new-btn" data-bs-toggle="modal" data-bs-target="#add_medical_records">Add Medical Records</a>
                                        </div>
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Date </th>
                                                                <th>Description</th>
                                                                <th>Attachment</th>
                                                                <th>Created</th>
                                                                <th></th>
                                                            </tr>     
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0010</a></td>
                                                                <td>14 Nov 2019</td>
                                                                <td>Dental Filling</td>
                                                                <td><a href="javascript:void(0);">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Ruby Perrin <span>Dental</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0009</a></td>
                                                                <td>13 Nov 2019</td>
                                                                <td>Teeth Cleaning</td>
                                                                <td><a href="javascript:void(0);">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Darren Elder <span>Dental</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light me-1">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                        <router-link to="/edit-prescription" class="btn btn-sm bg-success-light me-1" data-bs-toggle="modal" data-bs-target="#add_medical_records">
                                                                            <i class="fas fa-edit"></i> Edit
                                                                        </router-link>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                            <i class="far fa-trash-alt"></i> Delete
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0008</a></td>
                                                                <td>12 Nov 2019</td>
                                                                <td>General Checkup</td>
                                                                <td><a href="javascript:void(0);">cardio-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Deborah Angel <span>Cardiology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0007</a></td>
                                                                <td>11 Nov 2019</td>
                                                                <td>General Test</td>
                                                                <td><a href="javascript:void(0);">general-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Sofia Brient <span>Urology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0006</a></td>
                                                                <td>10 Nov 2019</td>
                                                                <td>Eye Test</td>
                                                                <td><a href="javascript:void(0);">eye-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Marvin Campbell <span>Ophthalmology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0005</a></td>
                                                                <td>9 Nov 2019</td>
                                                                <td>Leg Pain</td>
                                                                <td><a href="javascript:void(0);">ortho-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Katharine Berthold <span>Orthopaedics</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0004</a></td>
                                                                <td>8 Nov 2019</td>
                                                                <td>Head pain</td>
                                                                <td><a href="javascript:void(0);">neuro-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Linda Tobin <span>Neurology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0003</a></td>
                                                                <td>7 Nov 2019</td>
                                                                <td>Skin Alergy</td>
                                                                <td><a href="javascript:void(0);">alergy-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Paul Richard <span>Dermatology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0002</a></td>
                                                                <td>6 Nov 2019</td>
                                                                <td>Dental Removing</td>
                                                                <td><a href="javascript:void(0);">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. John Gibbs <span>Dental</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#MR-0001</a></td>
                                                                <td>5 Nov 2019</td>
                                                                <td>Dental Filling</td>
                                                                <td><a href="javascript:void(0);">dental-test.pdf</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Olga Barlow <span>Dental</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>  	
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Medical Records Tab -->
</template>