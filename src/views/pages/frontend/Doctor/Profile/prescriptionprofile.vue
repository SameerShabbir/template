<template>
 <!-- Prescription Tab -->
                                    <div class="tab-pane fade" id="pres">
                                        <div class="text-end">
                                            <router-link to="/add-prescription" class="add-new-btn">Add Prescription</router-link>
                                        </div>
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Date </th>
                                                                <th>Name</th>									
                                                                <th>Created by </th>
                                                                <th></th>
                                                            </tr>     
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>14 Nov 2019</td>
                                                                <td>Prescription 1</td>
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
                                                                <td>13 Nov 2019</td>
                                                                <td>Prescription 2</td>
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
                                                                        <router-link to="/edit-prescription" class="btn btn-sm bg-success-light me-1">
                                                                            <i class="fas fa-edit"></i> Edit
                                                                        </router-link>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                            <i class="far fa-trash-alt"></i> Delete
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>12 Nov 2019</td>
                                                                <td>Prescription 3</td>
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
                                                                <td>11 Nov 2019</td>
                                                                <td>Prescription 4</td>
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
                                                                <td>10 Nov 2019</td>
                                                                <td>Prescription 5</td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Marvin Campbell <span>Dental</span></router-link>
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
                                                                <td>9 Nov 2019</td>
                                                                <td>Prescription 6</td>
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
                                                                <td>8 Nov 2019</td>
                                                                <td>Prescription 7</td>
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
                                                                <td>7 Nov 2019</td>
                                                                <td>Prescription 8</td>
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
                                                                <td>6 Nov 2019</td>
                                                                <td>Prescription 9</td>
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
                                                                <td>5 Nov 2019</td>
                                                                <td>Prescription 10</td>
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
                                    <!-- /Prescription Tab -->
</template>