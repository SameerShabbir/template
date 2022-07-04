<template>
<!-- Billing Tab -->
                                    <div class="tab-pane" id="billing">
                                        <div class="text-end">
                                            <router-link class="add-new-btn" to="/add-billing">Add Billing</router-link>
                                        </div>
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Invoice No</th>
                                                                <th>Doctor</th>
                                                                <th>Amount</th>
                                                                <th>Paid On</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0010</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Ruby Perrin <span>Dental</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$450</td>
                                                                <td>14 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0009</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Darren Elder <span>Dental</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$300</td>
                                                                <td>13 Nov 2019</td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light me-1">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                        <router-link to="/edit-billing" class="btn btn-sm bg-success-light me-1">
                                                                            <i class="fas fa-edit"></i> Edit
                                                                        </router-link>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                            <i class="far fa-trash-alt"></i> Delete
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0008</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Deborah Angel <span>Cardiology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$150</td>
                                                                <td>12 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0007</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Sofia Brient <span>Urology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$50</td>
                                                                <td>11 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0006</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Marvin Campbell <span>Ophthalmology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$600</td>
                                                                <td>10 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0005</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Katharine Berthold <span>Orthopaedics</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$200</td>
                                                                <td>9 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0004</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Linda Tobin <span>Neurology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$100</td>
                                                                <td>8 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0003</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Paul Richard <span>Dermatology</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$250</td>
                                                                <td>7 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0002</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. John Gibbs <span>Dental</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$175</td>
                                                                <td>6 Nov 2019</td>
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
                                                                <td>
                                                                    <router-link to="/invoice-view">#INV-0001</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" src="../../../../../assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">Dr. Olga Barlow <span>#0010</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>$550</td>
                                                                <td>5 Nov 2019</td>
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
                                    <!-- Billing Tab -->
</template>