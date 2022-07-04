<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadcrumb12></breadcrumb12>
        
		<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						
						<calendarsidebar></calendarsidebar>
						
						<!-- Calendar -->
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									<FullCalendar :options="calendarOptions" :events="events"></FullCalendar>
								</div>
							</div>
						</div>
						<!-- /Calendar -->
						
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
    <!-- Add Event Modal -->
		<div id="add_event" class="modal custom-modal fade" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Add Event</h4>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Event Name <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
							<div class="form-group">
								<label>Event Date <span class="text-danger">*</span></label>
								<div class="cal-icon">
                                                        <datepicker v-model="startdate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />
                                                    </div>

							</div>
							<div class="submit-section">
								<button class="btn btn-primary submit-btn">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Event Modal -->
		
		<!-- Add Event Modal -->
		<div class="modal custom-modal fade none-border" id="my_event">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Add Event</h4>
						<button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body"></div>
					<div class="modal-footer justify-content-center">
						<button type="button" class="btn btn-success save-event submit-btn">Create event</button>
						<button type="button" class="btn btn-danger delete-event submit-btn" data-bs-dismiss="modal">Delete</button>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Event Modal -->
		
		<!-- Add Category Modal -->
		<div class="modal custom-modal fade" id="add_new_event">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Add Category</h4>
						<button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Category Name</label>
								<input class="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
							</div>
							<div class="form-group">
								<label>Choose Category Color</label>
								<select class="form-select form-control form-white" data-placeholder="Choose a color..." name="category-color">
									<option value="success">Success</option>
									<option value="danger">Danger</option>
									<option value="info">Info</option>
									<option value="primary">Primary</option>
									<option value="warning">Warning</option>
									<option value="inverse">Inverse</option>
								</select>
							</div>
							<div class="submit-section text-center">
								<button type="button" class="btn btn-primary save-category submit-btn" data-bs-dismiss="modal">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Category Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  import FullCalendar from "@fullcalendar/vue3";
  import {
  CalendarOptions,
  EventApi,
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
  export default {
    components: {
    FullCalendar,
    },
    data() {
    return {
		startdate: currentDate,
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
        {
            title  : '10.02p Test Event 1',
            start  : '2020-08-29',
        },
        {
            title  : '7.55p Test Event 3',
            start  : '2020-09-02',
        },
      ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
    }
  },
  props: {
    msg: String,
  },
    mounted() {

    }
  }
</Script>
