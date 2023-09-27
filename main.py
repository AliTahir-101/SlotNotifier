import os
import time
import subprocess

# Get the absolute path of the current Python script
script_abs_path = os.path.abspath(__file__)

# Get the directory containing the current Python script
script_dir = os.path.dirname(script_abs_path)

# Define the relative path to the 'e2e' folder from the script directory
e2e_folder_rel_path = os.path.join(script_dir, "cypress", "e2e")


def run_cypress_command(script: str) -> None:
    # Execute the command in the specified directory
    subprocess.run(f"npx cypress run --spec {script} --headless", shell=True)


if __name__ == "__main__":
    scripts_relative_path_list = []
    # List all files in the 'e2e' folder
    for foldername, subfolders, filenames in os.walk(e2e_folder_rel_path):
        for filename in filenames:
            # Construct full file path
            file_path = os.path.join(foldername, filename)

            # Find the relative path from the script to the file
            rel_path_from_script = os.path.relpath(file_path, script_dir)
            scripts_relative_path_list.append(rel_path_from_script)
            # print(f"Relative path from script to file: {rel_path_from_script}")

    print("Note: I recommend to logout and close the browsers first as it will raise a flag if you have multiple open portal sessions from single ip/account...")
    print("Please choose an automation script: ")
    for idx, script in enumerate(scripts_relative_path_list):
        print(f"{idx+1}) - ", script)
    option = int(input())
    print("\nSelected! -> ", scripts_relative_path_list[option-1])
    wait = input(
        "\nPlease add a wait interval before each run to avoid getting IP banned (type an integer value like 2 or 20): ")
    wait_in_minutes = int(wait if wait else 15)
    while True:
        run_cypress_command(scripts_relative_path_list[option-1])
        # Just an effort to avoid getting IP banned.
        # Sleep for 20 minutes (15 minutes * 60 seconds = 900 seconds)
        time.sleep((wait_in_minutes * 60))
