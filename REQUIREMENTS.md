# Register a bedroom

**Functional-Rules**
[] Should be able to register a new bedroom

**Business-Rules**
[] Only admin users can register a new bedroom
[] Should not be able to register a bedroom if the room number already exists
[] Should not be able to modify the room number if the room is already registered
[] The room must be registered with availability

# List rooms

**Functional-Rules**
[] Should be able to list all available rooms
[] Should be able to list all available rooms filtered by category name
[] Should be able to list room by room number

**Business-Rules**
[] User do not need be logged to see all available rooms

# Register a room specification

**RF**
[] Should be able to register a new room specification

**RN**
[] Only admin users can register a new specification
[] Should not be able to register a new specification if the room does not exist
[] Should not be able to register a specification if it already exists for the same room

# Register room images

**RF**

[] Should be able to register a new room image

**RNF**

[] Should use multer for file upload

**RN**

[] Only admin users can register a new image
[] User should be able to register more than one image

# Car rental

**RF**
[] Should be able to rent a room

**RNF**

**RN**
[] The minimum time to rent a room must be 1 day (24h)
[] Should not be able to register a new rent if the user already have rented a room
[] Should not be able to register a new rent if the room has already been rented
[] If the room has already been rented, the status should be unavailable

# Room Check Out

**RF**
[] Should be able to check out the room

**RN**
[] If the room is returned with less than 24 hours, should be charged complete daily.
[] When the return occurs, the room should be available for another rental
[] When the return occurs, the user should be able to rent another room
[] When the return occurs, should be charged the total rent amount.
[] If the return date is more than the expected return date, a fine per day of delay should be charged.
[] If the check out time is after 6pm (18H brazilian time), should be added a late_check_out
[] If the user has any fines, the value should be added to the total rent amount.

# List user rentals

**RF**
[] Should be able to list user rentals

**RN**
[] The user must be authenticated

# Recover password

**RF**

[] Should be able to recover password using the user's email
[] User must receive an email with the instructions to recover the password
[] User must be able to insert a new password

**RN**
[] User needs to create a new password
[] The link sent to recover the password must expire in 3 hours
