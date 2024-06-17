#!/bin/bash

components=(
  "GroupsComponent"
  "AssignmentsComponent"
  "TestsComponent"
  "StudentGradingComponent"
  "DigitalLibraryComponent"
  "ErasmusComponent"
  "Calendar1Component"
  "Calendar2Component"
  "Calendar3Component"
  "Calendar4Component"
  "Calendar5Component"
  "Calendar6Component"
  "Calendar7Component"
  "Calendar8Component"
  "Calendar9Component"
)

for component in "${components[@]}"
do
  file_name="${component}.vue"
  file_path="./components/${file_name}"

  if [ ! -f "$file_path" ]; then
    touch "$file_path"
    echo "<template></template>" >> "$file_path"
    echo "" >> "$file_path"
    echo "<script setup></script>" >> "$file_path"
    echo "" >> "$file_path"
    echo "<style scoped></style>" >> "$file_path"
    echo "Created file: $file_path"
  else
    echo "File already exists: $file_path"
  fi
done