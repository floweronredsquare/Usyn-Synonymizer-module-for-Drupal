<?php
/**
* @file
* Callbacks administrative pages for Usyn Synonymizer module
*/

/**
* Upload CSV form creation
*/
function usyn_synonymizer_admin_settings() {
  $path = file_create_url('clean-db');
  $form['addfile'] = array(
    '#type'   => 'item',
    '#markup' => '<a href="' . $path . '" alt="">' . t('To the page cleaning base of synonyms') . '</a>',
  );
  $form['file'] = array(
    '#type' => 'file',
    '#title' => t('Base of synonyms'),
    '#description' => t('CSV files only.'),
  );
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => 'Send',
  );
  return $form;
}

 /**
 * Form validate callback
 */
function usyn_synonymizer_admin_settings_validate($form, &$form_state) {
  $validators = array(
    'file_validate_extensions' => array('csv'),
    'file_validate_size' => array(1 * 102400 * 102400),
  );
  if ($file = file_save_upload('file', $validators, 'public://')) {
    $form_state['values']['file'] = $file;
  }
  else {
    form_set_error('file', 'File was not downloaded');
  }
}
 
/**
 * Form submit callback
 */
function usyn_synonymizer_admin_settings_submit($form, &$form_state) {
  $file = $form_state['values']['file'];
  $file->status = FILE_STATUS_PERMANENT;
  file_save($file);
  drupal_set_message('File was downloaded');
  $path = str_replace('public:/', variable_get('file_public_path', 'sites/default/files'), $file->uri);
  variable_set('path_to_file', $path);
  $form_state['redirect'] = 'import-large-csv';
}